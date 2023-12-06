
const DynamicPage = ({ params, searchParams }) => {
    console.log(params);
    return (
        <div>
            <h2>This is dynamic page : {params.id}</h2>
            <h2>Search by : {searchParams.category}</h2>
        </div>
    );
};

export default DynamicPage;