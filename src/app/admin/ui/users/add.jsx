'use client'

import styles from './adduser.module.css'

const AddUserpage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData()

        formData.append('name', form.username.value)
        formData.append('email', form.email.value)
        formData.append('password', form.password.value)
        formData.append('phone', form.phone.value)
        formData.append('address', form.address.value)
        formData.append('is_admin', form.isAdmin.value)
        formData.append('is_active', form.isActive.value)

        if (form.image.files[0]) {
            formData.append('image', form.image.files[0])
        }

        const res = await fetch('/api/users', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()

        if (!res.ok || !data.success) {
            alert(data.error || 'Something went wrong')
            return
        }

        form.reset()
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder='Username' name='username' required />
                <input type="email" placeholder='Email' name='email' required />
                <input type="password" placeholder='Password' name='password' required />
                <input type="number" placeholder='Phone' name='phone' required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea 
                    name="address" 
                    rows="5" 
                    placeholder="Address"
                    />
                <input type="file" name="image" accept="image/*" />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddUserpage;