import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import LinkButton from "../LinkButton"
import { useState } from "react"


export default function Profile(props) {

    const [ followTxt, setFollowTxt ] = useState("Follow");
    
    function handleClick(ev){
        alert("você está seguindo!");
        setFollowTxt("Following");
    }

    
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.name} className={styles.avatar}/>
            <Title>
                <span>{props.name}</span>
                <button
                    onClick={handleClick}
                    className={styles.followBtn}
                >
                    {followTxt}
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