import {FiltersWrap, Wrap} from "./styled.ts";
import {Posts} from "../../components/pages/home/Posts";

const Home = () => {
    return (
        <Wrap>
            <div>
                <FiltersWrap>Filters</FiltersWrap>
                <Posts/>
            </div>
            <div>Save Posts</div>
        </Wrap>
    );
};

export default Home;
