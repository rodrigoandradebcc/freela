import React from 'react';
import { Container, ContainerProps, SxProps, Theme } from '@mui/material';

type PreSaleContainerOwnProps = {
    paddingXs?: string;
    paddingLg?: string;
    sx?: SxProps<Theme>;
};

type PreSaleContainerProps<C extends React.ElementType> = PreSaleContainerOwnProps &
    Omit<ContainerProps<C, { component?: C }>, keyof PreSaleContainerOwnProps>;

type PreSaleContainerComponent = <C extends React.ElementType = 'div'>(
    props: PreSaleContainerProps<C>
) => React.ReactElement | null;

const PreSaleContainer: PreSaleContainerComponent = ({
    children,
    paddingXs = "1.5rem 1.25rem",
    paddingLg = "5rem 4.5rem",
    sx,
    ...rest
}) => {

    const baseSx: SxProps<Theme> = {
        padding: {
            xs: paddingXs,
            sm: paddingLg,
        },
    };

    return (
        <Container sx={[baseSx, sx] as SxProps<Theme>} {...rest}>
            {children}
        </Container>
    );
};

export default PreSaleContainer;