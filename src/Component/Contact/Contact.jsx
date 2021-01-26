import React from 'react'
import { useForm } from 'react-hook-form'


function Contact () {
    
    const { register, handleSubmit,  errors } = useForm({criteriaMode: 'all'})

    const onSubmit = data => console.log('data :', data)
    return (
    <>
    <h1>Contact</h1>
    <form className={'formContact'} onSubmit={handleSubmit(onSubmit)}>
        <h2>Vous souhaitez me contacter ?</h2>
        <div>
            <label htmlFor={'name'}>Votre nom</label>
            <input key='name' name='name' placeholder=" " type='text' required minLength='2'
                ref={register({required: true,  maxLength:25, minLength:2})} />
                {errors.name && errors.name.type === "required" && <span>Ce champ est requis</span>}
                {errors.name && errors.name.type === "minLength" && <span>Votre nom est trop long</span> }
                {console.log('name.errors', errors.name)}
            <div className='requirements'>Champ requis</div>
        </div>
        <div>
            <label htmlFor={'mail'}>Votre mail</label>
            <input name='mail' key='mail' placeholder=" " required type='email'ref={register({required: true})} />
        </div>
        <div>
            <label htmlFor={'message'}>Votre message</label>
            <textarea name='message' key='message' placeholder=" " required ref={register({required: true, minLength:10, maxLength:1000})} />
            <div className='requirements'>Champ requis</div>
        </div>
        <input type='submit' className={'btn'} value="Envoyer" />
        <div className='requirements'>Champ requis</div>
    </form>
    </>
    )
}

export default Contact