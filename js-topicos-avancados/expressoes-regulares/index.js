 function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match( /(?<=\()\d+(?=\))/ ) [0]
    this.number = fixedString.match( /(?<=\)).+/ )[0].replace(/-/g, "")
 }

 console.log(new PhoneNumber('+55 (85) 9 9675-9585'))
 console.log(new PhoneNumber('+1 (98) as555-999-8888'))