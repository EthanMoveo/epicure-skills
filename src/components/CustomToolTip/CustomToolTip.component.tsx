import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled } from '@mui/system';


const CustomToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#8B5DFF', 
    color: '#fff',                   
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#8B5DFF', 
  },
}));

export default CustomToolTip;