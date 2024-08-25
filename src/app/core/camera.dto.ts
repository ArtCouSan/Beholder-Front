import { SafeResourceUrl } from "@angular/platform-browser";

export interface Camera {
    name: string; 
    url: string;
    safeUrl: SafeResourceUrl;
    hovering: boolean;
}