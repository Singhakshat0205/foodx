



const Contact=()=>{

    return (
        <div className="contact-container">
            <h1 className="font-bold text-4xl m-4 ">contact us</h1> 

            <form>
                <input type="text"className="border border-black p-2 m-2" placeholder="name" />
                <input type="text"className="border border-black p-2 m-2" placeholder="message" />
                <button type="submit" className="border border-black p-2 m-2">submit</button>
            </form>
        </div>
    )
}

export default Contact;