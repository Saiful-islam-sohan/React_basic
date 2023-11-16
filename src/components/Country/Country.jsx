

const Country = (props) => {
    return (
        <div>
            <p>name:{props.name}</p>
            <p>population:{props.population}</p>
            <img src="{props.map}" alt="" />
            
        </div>
    );
};

export default Country;