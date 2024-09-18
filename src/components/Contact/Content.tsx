import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AnimList } from "../features/AnimList";

interface FormData {
  name: string;
  email: string;
  message: string;
  access_key?: string;
}


export function Content() {
  const [movbut, setMovbut] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  //Comportement 
  //Traitement de handleSubmit 
  const onSubmit = async (formData: FormData) => {
    formData.access_key = "e6d1232b-ee9f-47ef-9e41-fb6928a514fb";
  
    const json = JSON.stringify(formData);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      Swal.fire({
        title: "Envoyé !",
        text: "Merci de m'avoir contacté, je serai à vous sous peu de temps.",
        icon: "success",
        confirmButtonText: "Fermer",
        customClass: {
            popup: 'rounded-xl bg-[#121212] text-[#fff] absolute h-[400px] w[200px] md:mb-20',
            title: 'font3',
            confirmButton: 'h-[50px] w-[150px] bg-[#e1e1e1] text-[#0a001a] rounded-lg',
          },
      });
    } else {
      Swal.fire({
        title: "Désolé, votre message n'a pas été envoyé",
        text: "Veuillez réessayer s'il vous plaît.",
        icon: "error",
        confirmButtonText: "Fermer",
        customClass: {
            popup: 'rounded-xl bg-[#121212] text-[#fff] absolute h-[400px] w[200px] md:mb-20',
            title: 'font3',
            confirmButton: 'h-[50px] w-[150px]  text-[#0a001a] rounded-lg',
          },
      });
    }
  };

 //Affichage
  return (
    <div className="lg:mt-[-200px] md:mt-[-650px] mt-[-350px] mb-32 h-full w-full flex flex-col justify-center items-center">
    <div id="Contact" className="flex flex-col max-w-[80%] lg:flex-row justify-center items-center gap-12 dark:bg-[#0a001a] bg-[#e1e1e1] relative w-full p-12 rounded-3xl ">
     <AnimList/>
      <div className="flex justify-center  lg:mr-[80px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-M-medium text-center mb-2 text-[#0a001a] dark:text-[#efe5ff]">Contact par mail</h1>
          <div className='grid grid-cols-12 md:w-[430px] place-content-center'>
            <div className='grid col-span-12 mb-2'>
              <input
                {...register('name', {
                  required: true,
                  pattern: /^[A-Za-z ]+$/,
                  maxLength: 30,
                })}
                type="text"
                placeholder="Nom"
                name='name'
                className="col-span-12 p-3 font3 rounded-md  bg-blue-gray-50 dark:bg-[#0a001a] bg-[#e1e1e1] border border-accent-foreground font1 outline-none"
              />
            </div>
              {errors.name && errors.name.type === 'required' && <p className='col-span-6 text-[#0a001a] dark:text-[#efe5ff] font2'>Ce champ est requis</p>}
              {errors.name && errors.name.type === 'maxLength' && <p className='col-span-6 text-[#0a001a] dark:text-[#efe5ff] font2'>Votre nom est trop long</p>}
              {errors.name && errors.name.type === 'pattern' && <p className='col-span-6 text-[#0a001a] dark:text-[#efe5ff] font2'>Ceci n'est un nom</p>}

            <div className='grid col-span-12 mb-2'>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })} placeholder="Votre adresse mail"
                name='email'
                className='col-span-12 font3 bg-blue-gray-50 h-[50px] dark:bg-[#0a001a] bg-[#e1e1e1] border border-accent-foreground p-3 rounded-md font1 outline-none'
              />
              {errors.email && errors.email.type === "required" && <p className='col-span-8 mr-20 text-[#0a001a] dark:text-[#efe5ff] font2'>Veuillez entrer une adresse mail</p>}
              {errors.email && errors.email.type === "pattern" && <p className='col-span-8 mr-20 text-[#0a001a] dark:text-[#efe5ff] font2' >Vous saisissez une fausse address </p>}
            </div>

            <div className='grid col-span-12 mb-2'>
              <textarea
                {...register('message', {
                  required: true,
                  pattern: /^[A-Za-z0-9._%()+\-!?*\s]+$/,
                  maxLength: 800,
                })}
                placeholder='Message'
                name='message'
                className='col-span-12 font3 resize-none p-20 bg-blue-gray-50 dark:bg-[#0a001a] bg-[#e1e1e1] border border-accent-foreground rounded-md font1 outline-none'
              >
              </textarea>
            </div>
            {errors.message && errors.message.type === 'required' && <p className='col-span-8 mr-20 text-[#0a001a] dark:text-[#efe5ff] font2'>Ce champ est requis</p>}
            {errors.message && errors.message.type === 'maxLength' && <p className='col-span-8 mr-20 text-[#0a001a] dark:text-[#efe5ff] font2'>Votre message est trop long</p>}
            {errors.message && errors.message.type === 'pattern' && <p className='col-span-8 mr-20 text-[#0a001a] dark:text-[#efe5ff] font2'>Ceci n'est pas un message</p>}
            <div className='grid col-span-12'>
              <motion.button
                className='col-span-3 dark:bg-[#a877fd] bg-[#330288] font3 text-[#efe5ff] dark:text-[#0a001a] p-2 rounded-md'
                animate={{ scale: movbut ? 1.1 : 1 }}
                onClick={() => {
                  setMovbut(true);
                  setTimeout(() => {
                    setMovbut(false);
                  }, 100);
                }}

              >
                Envoyer
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <span className="text-center w-full max-w-[80%] rounded-2xl font-M-semiBold text-3xl text-[#071620] bg-[#e1e1e1] p-5 mt-3">Contact telephonique :
      <p>+229 60 00 00 00</p>
    </span>
    </div>
  );
}

