/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LoginButton {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NameAvatar {
        "image": 'avatar-img.png';
    }
    interface ToolbarTop {
        "appearance": string;
        "image": 'planet-img.png';
        "text": string;
    }
}
declare global {
    interface HTMLLoginButtonElement extends Components.LoginButton, HTMLStencilElement {
    }
    var HTMLLoginButtonElement: {
        prototype: HTMLLoginButtonElement;
        new (): HTMLLoginButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNameAvatarElement extends Components.NameAvatar, HTMLStencilElement {
    }
    var HTMLNameAvatarElement: {
        prototype: HTMLNameAvatarElement;
        new (): HTMLNameAvatarElement;
    };
    interface HTMLToolbarTopElement extends Components.ToolbarTop, HTMLStencilElement {
    }
    var HTMLToolbarTopElement: {
        prototype: HTMLToolbarTopElement;
        new (): HTMLToolbarTopElement;
    };
    interface HTMLElementTagNameMap {
        "login-button": HTMLLoginButtonElement;
        "my-component": HTMLMyComponentElement;
        "name-avatar": HTMLNameAvatarElement;
        "toolbar-top": HTMLToolbarTopElement;
    }
}
declare namespace LocalJSX {
    interface LoginButton {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NameAvatar {
        "image"?: 'avatar-img.png';
    }
    interface ToolbarTop {
        "appearance"?: string;
        "image"?: 'planet-img.png';
        "text"?: string;
    }
    interface IntrinsicElements {
        "login-button": LoginButton;
        "my-component": MyComponent;
        "name-avatar": NameAvatar;
        "toolbar-top": ToolbarTop;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "login-button": LocalJSX.LoginButton & JSXBase.HTMLAttributes<HTMLLoginButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "name-avatar": LocalJSX.NameAvatar & JSXBase.HTMLAttributes<HTMLNameAvatarElement>;
            "toolbar-top": LocalJSX.ToolbarTop & JSXBase.HTMLAttributes<HTMLToolbarTopElement>;
        }
    }
}
