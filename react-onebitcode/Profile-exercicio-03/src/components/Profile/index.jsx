import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import LinkButton from "../LinkButton"

function handleClick(ev){
    console.log(ev);
    alert("você está seguindo!");
}

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.name} className={styles.avatar}/>
            <Title>
                <span>{props.name}</span>
                <button
                    onClick={handleClick}
                    className={styles.followBtn}
                >
                    Follow
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection 
                className={styles.links}
                id='links-sections'
                aria-label='social links'
            >
                <LinkButton href={props.githubUrl}>Github</LinkButton>
                <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}