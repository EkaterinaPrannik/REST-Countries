import { useParams } from "react-router-dom";

const Details = () => {
    const params = useParams();
    const countryName = params.name;

    return (
        <div>
            Details {countryName}
        </div>
    );
}

export default Details;