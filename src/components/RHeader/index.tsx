import {NavLink} from "react-router-dom";
import {WrapList, Container, Wrap} from "./styled.ts";

export const RHeader = () => {
    return (
        <Wrap>
            <Container>
                <WrapList>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/auth">Log Out</NavLink>
                </WrapList>
            </Container>
        </Wrap>
    )
}