import styles from './adduser.module.css'
const AddUserpage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
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
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddUserpage;