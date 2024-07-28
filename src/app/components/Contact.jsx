import React, { useRef } from 'react'

function Contact() {

  const formRef = useRef(null);

  const scriptUrl = "https://script.google.com/macros/s/____________/exec";

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: new FormData(formRef.current)
      });

      if (response.ok) {
        alert("Thank you! Your form is submitted successfully.");
        window.location.reload();
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="h-[550px] min-w-full bg-base-200 px-12" id='contact'> {/*min-h-96*/}
        <div className="flex justify-evenly flex-col lg:flex-row">
          <div className="max-w-md" id='contact_info'>
            <h1 className="text-3xl xl:text-5xl font-bold my-8">Contact Me</h1>
            <h2 className="py-1 pt-8 text-xl">Email : </h2>
            <h2 className="py-1 text-xl">Tel : 061-242-9861</h2>
            <h2 className="py-1 text-xl">Instagram : nattawat_stw</h2>
          </div>

          <div className="xl:w-[700px] xl:h-[390px] mt-5">
            <form method="post" name="conatact-form" id='form-contact' className='align-middle' ref={formRef} onSubmit={handlerSubmit}>
              <input className='input input-bordered min-w-full border-0 outline-none bg-slate-900 p-4 my-4' type="text" name="Name" placeholder="Your Name" required/>
              <input className='input input-bordered min-w-full border-0 outline-none bg-slate-900 p-4 my-4' type="email" name="email" placeholder="Your Email" required/>
              <textarea className='textarea textarea-bordered min-w-full border-0 outline-none bg-slate-900 p-4 my-4' name="Message" rows="6" placeholder="Your Message"></textarea>
              <input type="submit" className='btn btn-primary text-2xl mt-3' value="Submit"/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact