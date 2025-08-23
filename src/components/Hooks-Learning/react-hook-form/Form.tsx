import { z } from "zod";
import { useForm,type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormFields = z. infer<typeof schema>;
//  type FormFields = {
//         email:string,
//         password: string
        
//     }

export const Form = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState<{email?: string; password?: string}>({
    //     email: "",
    //     password: "",
    // });
    // // for longer and complex form ;; useForm hook 
    // const handleSubmit = ( e: React. FormEvent) => {
    //     e.preventDefault();

    //     setErrors({
    //         email: "",
    //         password: "",
    //     })

    //     // Manual validation
    //     if(!email.includes("@")){
    //         setErrors(errors=> ({...errors, email: "Invalid email address"}));
    //         return;
    //     }

    //     if(password.length < 6){
    //         setErrors(errors=> ({...errors, password: "Password must be at least 6 characters"}));
    //         return;
    //     }

    //     console.log("form submitted with", {email});

    // }

    const { 
        register, 
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>(
        {
            defaultValues: {
                email: "",
                password: "",
            },
            resolver: zodResolver(schema) 
        }
    )

    const onSubmitHandler: SubmitHandler<FormFields> = async (data) =>{
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
            throw new Error()
            console.log("Form submitted with data:", data);
        } catch (error) {
            setError("root", { type: "manual", message: "Server error, please try again later" });
        }
        
    }
    // Add validation and error handling as needed
    return(
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <label htmlFor="email">Email*:</label>
                <input 
                    type="email" 
                    id="email" 
                    {...register("email",{
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        }
                    })}
                    placeholder="Enter your email"
                    // value={email} 
                    // onChange={(e) => setEmail(e.target.value)} 
                />
                {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
            </div>
            <div>
                <label htmlFor="password">Password*:</label>
                <input 
                    type="password" 
                    id="password" 
                    {...register("password", { 
                        required: "Password is required", 
                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                    })}
                    placeholder="Enter your password"
                    // value={password} 
                    // onChange={(e) => setPassword(e.target.value)} 
                />
                {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
            </div>
            <button disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting..." : "Submit"}</button>
            {errors.root && <span style={{color: "red"}}>{errors.root.message}</span>}
        </form>
    )
}