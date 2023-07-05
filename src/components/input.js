/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from 'classnames';
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "@react-icons/all-files/md/MdError";
import { findInputError } from "../utility/findInputError";
import { isFormInvalid } from "../utility/isFormInvalid";

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
  value,  
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'p-2 rounded-md w-full border border-slate-300 placeholder:opacity-60 mb-4'

  return (
    <div className={cn('flex flex-col w-full gap-1', className)}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block capitalize text-gray-600 text-sm font-normal text-left mt-4">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={cn(input_tailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind)}
          value={value}
          placeholder={placeholder}        
          {...register(name, validation)}
        />
      )}
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-0.5 px-2 font-normal text-xs text-red-500 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
