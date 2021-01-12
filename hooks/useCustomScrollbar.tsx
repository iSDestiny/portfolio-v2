import { useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';

const useCustomScrollbar = () => {
    const { colorMode } = useColorMode();
    useEffect(() => {
        OverlayScrollbars(document.querySelectorAll('body'), {
            className:
                colorMode === 'light' ? 'os-theme-dark' : 'os-theme-light',
            scrollbars: { autoHide: 'scroll' }
        });
    }, [colorMode]);
};

export default useCustomScrollbar;
