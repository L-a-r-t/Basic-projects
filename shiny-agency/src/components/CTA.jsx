import { CTAStyle } from './CTA.styles';

function CTA(props) {
    return <CTAStyle to={props.to}>{props.text}</CTAStyle>;
}

export default CTA;