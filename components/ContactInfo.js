import Heading from "./Heading";

const ContactInfo = ({contact}) => {

    const {name, email, address} = contact;
    const {street, suite, city, zipcode, geo} = address;
    const {lat, lng} = geo;

    if(!contact) {
        return <Heading tag='h3' text='Empty Contact' />
    }

    return (
        <>
            <Heading tag='h3' text={name} />
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {street} {suite} {city} {zipcode} 
            </div>
            <div>
                <strong>Geo: </strong>
                {lat} {lng}
            </div>
        </>
    )
}

export default ContactInfo;