import { Container } from "./styles";

export function ButtonText({title, isActive,...rest}) {
    return (
        <Container
            {...rest}
            type="button"
            disabled={isActive}
        >
            {title}
        </Container>
    )
}