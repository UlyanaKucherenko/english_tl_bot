import {Outlet} from "react-router-dom";
import {RHeader} from "../../components/RHeader";
import {Wrap,Main} from "./styled.ts";

export const MainLayout = () => {
    return (
        <Wrap>
            <RHeader/>
            <Main>
                <Outlet/>
            </Main>
        </Wrap>
    );
};
