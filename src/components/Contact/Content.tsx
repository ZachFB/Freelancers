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
    <div id="Contact" className="flex flex-col max-w-[90%] lg:max-w-[900px] lg:flex-row justify-center items-center gap-2 dark:bg-[#0a001a] bg-[#e1e1e1] relative w-full p-8 rounded-3xl">
        <AnimList />
        <div className="flex justify-center items-center w-[100%]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <h1 className="text-3xl font-M-medium text-center mb-4 text-[#0a001a] dark:text-[#efe5ff]">Contact par mail</h1>
                
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12">
                        <input
                            {...register('name', {
                                required: true,
                                pattern: /^[A-Za-z ]+$/,
                                maxLength: 30,
                            })}
                            type="text"
                            placeholder="Nom"
                            name="name"
                            className="w-full p-3 font3 rounded-xl bg-blue-gray-50 dark:bg-[#0a001a] bg-[#e1e1e1] border border-accent-foreground font1 outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>}
                    </div>
                    
                    <div className="col-span-12">
                        <input
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                            type="email"
                            placeholder="Votre adresse mail"
                            name="email"
                            className="w-full p-3 font3 h-[50px] dark:bg-[#0a001a] bg-[#e1e1e1] border border-accent-foreground rounded-xl font1 outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Veuillez entrer une adresse mail valide</p>}
                    </div>
                    
                    <div className="col-span-12">
                        <textarea
                            {...register('message', {
                                required: true,
                                pattern: /^[A-Za-z0-9._%()+\-!?*\s]+$/,
                                maxLength: 800,
                            })}
                            placeholder="Message"
                            name="message"
                            className="w-full p-4 font3 resize-none dark:bg-[#0a001a] bg-[#e1e1e1] border border-accent-foreground rounded-xl font1 outline-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>}
                    </div>
                    
                    <div className="col-span-12">
                        <motion.button
                            className="w-full dark:bg-[#a877fd] bg-[#330288] font3 text-[#efe5ff] dark:text-[#0a001a] p-3 rounded-xl"
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
    
    <span className="text-center lg:w-[67%] w-[90%] rounded-2xl font-M-semiBold text-3xl text-[#071620] bg-[#e1e1e1] p-5 mt-5">
        Contact téléphonique : <p>+229 60 00 00 00</p>
    </span>
</div>


  );
}

