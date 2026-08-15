export const Contactpage = () => {

  return (
    <div className="contact py-30 bg-black">
      <div className="container flex flex-col gap-5 mx-auto max-w-2xl py-5 px-2 text-white">
        <div className="text-center">
          <h1 className="text-5xl/tight font-semibold">Contact Us</h1>
          <h3>Let's start our briliant conversation!</h3>
        </div>
        <div className="contact-form flex flex-col md:flex-row justify-center gap-5">
          <div className="email-form flex flex-col w-full">
            <span className="text-white">Email</span>
            <input type="email" className="bg-white rounded-xl py-1 px-2 text-black"/>
          </div>
          <div className="name-form flex flex-col w-full">
            <span className="text-white">Name</span>
            <input type="text" className="bg-white rounded-xl py-1 px-2 text-black"/>
          </div>
        </div>
        <div className="message-form flex flex-col">
          <span>Message</span>
          <textarea name="message" className="bg-white rounded-xl px-1 py-2 h-32"></textarea>
        </div>
        <div>
          <button type="button" onClick={ () => alert("Message has been send!") } className="bg-white rounded-xl w-full text-black py-2 font-bold border border-3 transition-all duration-300 hover:bg-black hover:border-white hover:text-white">Send</button>
        </div>
      </div>
    </div>
  )
}