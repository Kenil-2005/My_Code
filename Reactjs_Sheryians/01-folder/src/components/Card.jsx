const Card = (props) => {
    console.log(props);

    const { user, age, image } = props;

    return (
        <div className="card">
            <img src={image} alt="" />
            <h1>{user}</h1>
            <h1>{age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur laboriosam eos sed, assumenda maxime suscipit quae? Delectus, illo. Earum fugiat obcaecati, accusamus commodi ipsam voluptas harum animi quis esse?</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card;