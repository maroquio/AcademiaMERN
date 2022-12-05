const FormCheckbox = ({ field, onChange, label, value }) => {
    return (
        <>
            <div className="form-check mt-3">
                <input type="checkbox" className="form-check-input" id={field} name={field} onChange={onChange} value={value || ""} />
                <label className="form-check-label" htmlFor={field}>
                    {label}
                </label>
            </div>
        </>
    );
};

export default FormCheckbox;
