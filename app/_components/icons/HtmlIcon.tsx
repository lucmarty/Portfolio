import { ComponentPropsWithoutRef } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export const HtmlIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <svg
                    width={props.size}
                    height={props.size}
                    viewBox="0 0 256 250"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                    {...props}
                >
                    <g>
                        <path d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z" fill="#E44D26"></path>
                        <path d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z" fill="#F16529"></path>
                        <path d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z" fill="#EBEBEB"></path>
                        <path d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z" fill="#EBEBEB"></path>
                        <path d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z" fill="#FFFFFF"></path>
                        <path d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z" fill="#FFFFFF"></path>
                    </g>
                </svg>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit p-2">
                HTML
            </HoverCardContent>
        </HoverCard>


    );
};
