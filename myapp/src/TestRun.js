import MyForm from "./MyForm";

function TestRun() {
    const handleSubmit = () => {
        console.log("Form submitted");
    }

    return(
        <>
        <MyForm onSubmit={handleSubmit} />
        </>
    );
}

export default TestRun;