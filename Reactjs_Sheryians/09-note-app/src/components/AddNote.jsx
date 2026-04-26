const AddNote = ({ data }) => {

    const { noteHeanding, details } = data;
    console.log(data);

    return (
        <>
            <div>
                {noteHeanding}
                <br></br>
                {details}
            </div>
        </>
    );
}

export default AddNote;
