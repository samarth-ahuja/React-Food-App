export default function Input({label,...props}){
    return (
        <div className="control">
            <label htmlFor={label}>{label}</label>
            <input {...props}/>
        </div>
    );
}