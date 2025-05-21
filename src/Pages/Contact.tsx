export default function Contact() {

  return (
    <div className=" container-gradient  flex flex-col  items-center ">
      <h1 className="text-4xl text-white my-6 mx-4"> Contact Us</h1>
      <div className="flex flex-col justify-center items-center">
        <form
          action="Submit"
          className=" flex flex-col text-white gap-3 max-w-[48rem] w-[100%]">
          <input className="form-input" placeholder="Name" />
          <input className="form-input" placeholder="Email" />
          <textarea
            className="form-input"
            placeholder="Your message..."
            rows={5}
          />
          <button className="app-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
