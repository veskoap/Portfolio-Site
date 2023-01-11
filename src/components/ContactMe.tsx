import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from 'react-hook-form'
import {PageInfo} from '../page/types'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {
  pageInfo: PageInfo
}

function ContactMe({pageInfo}: Props) {
  const {register, handleSubmit} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:veskoap@icloud.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. My email is ${formData.email}`
  }

  return (
    <div className="h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-20 xl:top-24 uppercase tracking-[10px] lg:tracking-[20px] text-gray-500 text-2xl">contact</h3>
      <div className="flex flex-col space-y-5 md:space-y-10 mt-10">
        <h4 className="text-2xl lg:text-4xl font-semibold text-center">
          Feel free to reach out.{' '}
          <span className="underline decoration-[#892CDC]/50">Let's Chat</span>
        </h4>

        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#892CDC] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-xl lg:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#892CDC] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-xl lg:text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#892CDC] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-xl lg:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-auto mx-auto flex-wrap space-y-2"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#892CDC] py-2 px-5 md:py-5 md:px-10 rounded-md font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
