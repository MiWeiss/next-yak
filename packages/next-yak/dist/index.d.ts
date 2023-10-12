import React, { FunctionComponent } from 'react';

type ComponentStyles<TProps extends Record<string, unknown>> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
type CSSInterpolation<TProps extends Record<string, unknown>> = string | number | undefined | null | false | ComponentStyles<TProps> | ((props: TProps) => CSSInterpolation<TProps>);
type CSSFunction = <TProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps>[]) => ComponentStyles<TProps>;
declare const css: CSSFunction;

/**
 * The `styled` method works perfectly on all of your own or any third-party component,
 * as long as they attach the passed className prop to a DOM element.
 *
 * @usage
 *
 * ```tsx
 * const StyledLink = styled(Link)`
 *  color: #BF4F74;
 *  font-weight: bold;
 * `;
 * ```
 */
declare const styled: (<TBaseProps extends {}>(Component: FunctionComponent<TBaseProps>) => <TProps extends {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps>[]) => FunctionComponent<TBaseProps & TProps>) & {
    symbol: <TProps_1 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_1>[]) => FunctionComponent<React.SVGProps<SVGSymbolElement> & TProps_1>;
    object: <TProps_2 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_2>[]) => FunctionComponent<React.ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement> & TProps_2>;
    style: <TProps_3 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_3>[]) => FunctionComponent<React.ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement> & TProps_3>;
    a: <TProps_4 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_4>[]) => FunctionComponent<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & TProps_4>;
    abbr: <TProps_5 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_5>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_5>;
    address: <TProps_6 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_6>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_6>;
    area: <TProps_7 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_7>[]) => FunctionComponent<React.ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement> & TProps_7>;
    article: <TProps_8 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_8>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_8>;
    aside: <TProps_9 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_9>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_9>;
    audio: <TProps_10 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_10>[]) => FunctionComponent<React.ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement> & TProps_10>;
    b: <TProps_11 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_11>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_11>;
    base: <TProps_12 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_12>[]) => FunctionComponent<React.ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement> & TProps_12>;
    bdi: <TProps_13 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_13>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_13>;
    bdo: <TProps_14 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_14>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_14>;
    big: <TProps_15 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_15>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_15>;
    blockquote: <TProps_16 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_16>[]) => FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement> & TProps_16>;
    body: <TProps_17 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_17>[]) => FunctionComponent<React.ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement> & TProps_17>;
    br: <TProps_18 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_18>[]) => FunctionComponent<React.ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement> & TProps_18>;
    button: <TProps_19 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_19>[]) => FunctionComponent<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & TProps_19>;
    canvas: <TProps_20 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_20>[]) => FunctionComponent<React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement> & TProps_20>;
    caption: <TProps_21 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_21>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_21>;
    center: <TProps_22 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_22>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_22>;
    cite: <TProps_23 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_23>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_23>;
    code: <TProps_24 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_24>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_24>;
    col: <TProps_25 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_25>[]) => FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement> & TProps_25>;
    colgroup: <TProps_26 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_26>[]) => FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement> & TProps_26>;
    data: <TProps_27 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_27>[]) => FunctionComponent<React.ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement> & TProps_27>;
    datalist: <TProps_28 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_28>[]) => FunctionComponent<React.ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement> & TProps_28>;
    dd: <TProps_29 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_29>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_29>;
    del: <TProps_30 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_30>[]) => FunctionComponent<React.ClassAttributes<HTMLModElement> & React.DelHTMLAttributes<HTMLModElement> & TProps_30>;
    details: <TProps_31 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_31>[]) => FunctionComponent<React.ClassAttributes<HTMLDetailsElement> & React.DetailsHTMLAttributes<HTMLDetailsElement> & TProps_31>;
    dfn: <TProps_32 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_32>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_32>;
    dialog: <TProps_33 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_33>[]) => FunctionComponent<React.ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement> & TProps_33>;
    div: <TProps_34 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_34>[]) => FunctionComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & TProps_34>;
    dl: <TProps_35 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_35>[]) => FunctionComponent<React.ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement> & TProps_35>;
    dt: <TProps_36 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_36>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_36>;
    em: <TProps_37 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_37>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_37>;
    embed: <TProps_38 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_38>[]) => FunctionComponent<React.ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement> & TProps_38>;
    fieldset: <TProps_39 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_39>[]) => FunctionComponent<React.ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement> & TProps_39>;
    figcaption: <TProps_40 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_40>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_40>;
    figure: <TProps_41 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_41>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_41>;
    footer: <TProps_42 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_42>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_42>;
    form: <TProps_43 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_43>[]) => FunctionComponent<React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> & TProps_43>;
    h1: <TProps_44 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_44>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_44>;
    h2: <TProps_45 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_45>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_45>;
    h3: <TProps_46 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_46>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_46>;
    h4: <TProps_47 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_47>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_47>;
    h5: <TProps_48 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_48>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_48>;
    h6: <TProps_49 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_49>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_49>;
    head: <TProps_50 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_50>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement> & TProps_50>;
    header: <TProps_51 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_51>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_51>;
    hgroup: <TProps_52 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_52>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_52>;
    hr: <TProps_53 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_53>[]) => FunctionComponent<React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement> & TProps_53>;
    html: <TProps_54 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_54>[]) => FunctionComponent<React.ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement> & TProps_54>;
    i: <TProps_55 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_55>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_55>;
    iframe: <TProps_56 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_56>[]) => FunctionComponent<React.ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement> & TProps_56>;
    img: <TProps_57 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_57>[]) => FunctionComponent<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & TProps_57>;
    input: <TProps_58 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_58>[]) => FunctionComponent<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & TProps_58>;
    ins: <TProps_59 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_59>[]) => FunctionComponent<React.ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement> & TProps_59>;
    kbd: <TProps_60 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_60>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_60>;
    keygen: <TProps_61 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_61>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement> & TProps_61>;
    label: <TProps_62 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_62>[]) => FunctionComponent<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & TProps_62>;
    legend: <TProps_63 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_63>[]) => FunctionComponent<React.ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement> & TProps_63>;
    li: <TProps_64 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_64>[]) => FunctionComponent<React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement> & TProps_64>;
    link: <TProps_65 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_65>[]) => FunctionComponent<React.ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement> & TProps_65>;
    main: <TProps_66 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_66>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_66>;
    map: <TProps_67 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_67>[]) => FunctionComponent<React.ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement> & TProps_67>;
    mark: <TProps_68 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_68>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_68>;
    menu: <TProps_69 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_69>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement> & TProps_69>;
    menuitem: <TProps_70 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_70>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_70>;
    meta: <TProps_71 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_71>[]) => FunctionComponent<React.ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement> & TProps_71>;
    meter: <TProps_72 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_72>[]) => FunctionComponent<React.ClassAttributes<HTMLMeterElement> & React.MeterHTMLAttributes<HTMLMeterElement> & TProps_72>;
    nav: <TProps_73 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_73>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_73>;
    noindex: <TProps_74 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_74>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_74>;
    noscript: <TProps_75 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_75>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_75>;
    ol: <TProps_76 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_76>[]) => FunctionComponent<React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement> & TProps_76>;
    optgroup: <TProps_77 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_77>[]) => FunctionComponent<React.ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement> & TProps_77>;
    option: <TProps_78 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_78>[]) => FunctionComponent<React.ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement> & TProps_78>;
    output: <TProps_79 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_79>[]) => FunctionComponent<React.ClassAttributes<HTMLOutputElement> & React.OutputHTMLAttributes<HTMLOutputElement> & TProps_79>;
    p: <TProps_80 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_80>[]) => FunctionComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TProps_80>;
    param: <TProps_81 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_81>[]) => FunctionComponent<React.ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement> & TProps_81>;
    picture: <TProps_82 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_82>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_82>;
    pre: <TProps_83 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_83>[]) => FunctionComponent<React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement> & TProps_83>;
    progress: <TProps_84 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_84>[]) => FunctionComponent<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & TProps_84>;
    q: <TProps_85 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_85>[]) => FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement> & TProps_85>;
    rp: <TProps_86 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_86>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_86>;
    rt: <TProps_87 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_87>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_87>;
    ruby: <TProps_88 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_88>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_88>;
    s: <TProps_89 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_89>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_89>;
    samp: <TProps_90 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_90>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_90>;
    search: <TProps_91 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_91>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_91>;
    slot: <TProps_92 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_92>[]) => FunctionComponent<React.ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement> & TProps_92>;
    script: <TProps_93 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_93>[]) => FunctionComponent<React.ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement> & TProps_93>;
    section: <TProps_94 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_94>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_94>;
    select: <TProps_95 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_95>[]) => FunctionComponent<React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement> & TProps_95>;
    small: <TProps_96 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_96>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_96>;
    source: <TProps_97 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_97>[]) => FunctionComponent<React.ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement> & TProps_97>;
    span: <TProps_98 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_98>[]) => FunctionComponent<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & TProps_98>;
    strong: <TProps_99 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_99>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_99>;
    sub: <TProps_100 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_100>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_100>;
    summary: <TProps_101 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_101>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_101>;
    sup: <TProps_102 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_102>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_102>;
    table: <TProps_103 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_103>[]) => FunctionComponent<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & TProps_103>;
    template: <TProps_104 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_104>[]) => FunctionComponent<React.ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement> & TProps_104>;
    tbody: <TProps_105 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_105>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_105>;
    td: <TProps_106 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_106>[]) => FunctionComponent<React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> & TProps_106>;
    textarea: <TProps_107 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_107>[]) => FunctionComponent<React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & TProps_107>;
    tfoot: <TProps_108 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_108>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_108>;
    th: <TProps_109 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_109>[]) => FunctionComponent<React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> & TProps_109>;
    thead: <TProps_110 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_110>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_110>;
    time: <TProps_111 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_111>[]) => FunctionComponent<React.ClassAttributes<HTMLTimeElement> & React.TimeHTMLAttributes<HTMLTimeElement> & TProps_111>;
    title: <TProps_112 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_112>[]) => FunctionComponent<React.ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement> & TProps_112>;
    tr: <TProps_113 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_113>[]) => FunctionComponent<React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> & TProps_113>;
    track: <TProps_114 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_114>[]) => FunctionComponent<React.ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement> & TProps_114>;
    u: <TProps_115 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_115>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_115>;
    ul: <TProps_116 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_116>[]) => FunctionComponent<React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement> & TProps_116>;
    var: <TProps_117 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_117>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_117>;
    video: <TProps_118 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_118>[]) => FunctionComponent<React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement> & TProps_118>;
    wbr: <TProps_119 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_119>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_119>;
    webview: <TProps_120 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_120>[]) => FunctionComponent<React.ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement> & TProps_120>;
    svg: <TProps_121 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_121>[]) => FunctionComponent<React.SVGProps<SVGSVGElement> & TProps_121>;
    animate: <TProps_122 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_122>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_122>;
    animateMotion: <TProps_123 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_123>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_123>;
    animateTransform: <TProps_124 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_124>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_124>;
    circle: <TProps_125 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_125>[]) => FunctionComponent<React.SVGProps<SVGCircleElement> & TProps_125>;
    clipPath: <TProps_126 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_126>[]) => FunctionComponent<React.SVGProps<SVGClipPathElement> & TProps_126>;
    defs: <TProps_127 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_127>[]) => FunctionComponent<React.SVGProps<SVGDefsElement> & TProps_127>;
    desc: <TProps_128 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_128>[]) => FunctionComponent<React.SVGProps<SVGDescElement> & TProps_128>;
    ellipse: <TProps_129 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_129>[]) => FunctionComponent<React.SVGProps<SVGEllipseElement> & TProps_129>;
    feBlend: <TProps_130 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_130>[]) => FunctionComponent<React.SVGProps<SVGFEBlendElement> & TProps_130>;
    feColorMatrix: <TProps_131 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_131>[]) => FunctionComponent<React.SVGProps<SVGFEColorMatrixElement> & TProps_131>;
    feComponentTransfer: <TProps_132 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_132>[]) => FunctionComponent<React.SVGProps<SVGFEComponentTransferElement> & TProps_132>;
    feComposite: <TProps_133 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_133>[]) => FunctionComponent<React.SVGProps<SVGFECompositeElement> & TProps_133>;
    feConvolveMatrix: <TProps_134 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_134>[]) => FunctionComponent<React.SVGProps<SVGFEConvolveMatrixElement> & TProps_134>;
    feDiffuseLighting: <TProps_135 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_135>[]) => FunctionComponent<React.SVGProps<SVGFEDiffuseLightingElement> & TProps_135>;
    feDisplacementMap: <TProps_136 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_136>[]) => FunctionComponent<React.SVGProps<SVGFEDisplacementMapElement> & TProps_136>;
    feDistantLight: <TProps_137 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_137>[]) => FunctionComponent<React.SVGProps<SVGFEDistantLightElement> & TProps_137>;
    feDropShadow: <TProps_138 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_138>[]) => FunctionComponent<React.SVGProps<SVGFEDropShadowElement> & TProps_138>;
    feFlood: <TProps_139 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_139>[]) => FunctionComponent<React.SVGProps<SVGFEFloodElement> & TProps_139>;
    feFuncA: <TProps_140 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_140>[]) => FunctionComponent<React.SVGProps<SVGFEFuncAElement> & TProps_140>;
    feFuncB: <TProps_141 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_141>[]) => FunctionComponent<React.SVGProps<SVGFEFuncBElement> & TProps_141>;
    feFuncG: <TProps_142 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_142>[]) => FunctionComponent<React.SVGProps<SVGFEFuncGElement> & TProps_142>;
    feFuncR: <TProps_143 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_143>[]) => FunctionComponent<React.SVGProps<SVGFEFuncRElement> & TProps_143>;
    feGaussianBlur: <TProps_144 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_144>[]) => FunctionComponent<React.SVGProps<SVGFEGaussianBlurElement> & TProps_144>;
    feImage: <TProps_145 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_145>[]) => FunctionComponent<React.SVGProps<SVGFEImageElement> & TProps_145>;
    feMerge: <TProps_146 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_146>[]) => FunctionComponent<React.SVGProps<SVGFEMergeElement> & TProps_146>;
    feMergeNode: <TProps_147 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_147>[]) => FunctionComponent<React.SVGProps<SVGFEMergeNodeElement> & TProps_147>;
    feMorphology: <TProps_148 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_148>[]) => FunctionComponent<React.SVGProps<SVGFEMorphologyElement> & TProps_148>;
    feOffset: <TProps_149 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_149>[]) => FunctionComponent<React.SVGProps<SVGFEOffsetElement> & TProps_149>;
    fePointLight: <TProps_150 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_150>[]) => FunctionComponent<React.SVGProps<SVGFEPointLightElement> & TProps_150>;
    feSpecularLighting: <TProps_151 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_151>[]) => FunctionComponent<React.SVGProps<SVGFESpecularLightingElement> & TProps_151>;
    feSpotLight: <TProps_152 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_152>[]) => FunctionComponent<React.SVGProps<SVGFESpotLightElement> & TProps_152>;
    feTile: <TProps_153 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_153>[]) => FunctionComponent<React.SVGProps<SVGFETileElement> & TProps_153>;
    feTurbulence: <TProps_154 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_154>[]) => FunctionComponent<React.SVGProps<SVGFETurbulenceElement> & TProps_154>;
    filter: <TProps_155 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_155>[]) => FunctionComponent<React.SVGProps<SVGFilterElement> & TProps_155>;
    foreignObject: <TProps_156 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_156>[]) => FunctionComponent<React.SVGProps<SVGForeignObjectElement> & TProps_156>;
    g: <TProps_157 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_157>[]) => FunctionComponent<React.SVGProps<SVGGElement> & TProps_157>;
    image: <TProps_158 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_158>[]) => FunctionComponent<React.SVGProps<SVGImageElement> & TProps_158>;
    line: <TProps_159 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_159>[]) => FunctionComponent<React.SVGLineElementAttributes<SVGLineElement> & TProps_159>;
    linearGradient: <TProps_160 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_160>[]) => FunctionComponent<React.SVGProps<SVGLinearGradientElement> & TProps_160>;
    marker: <TProps_161 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_161>[]) => FunctionComponent<React.SVGProps<SVGMarkerElement> & TProps_161>;
    mask: <TProps_162 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_162>[]) => FunctionComponent<React.SVGProps<SVGMaskElement> & TProps_162>;
    metadata: <TProps_163 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_163>[]) => FunctionComponent<React.SVGProps<SVGMetadataElement> & TProps_163>;
    mpath: <TProps_164 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_164>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_164>;
    path: <TProps_165 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_165>[]) => FunctionComponent<React.SVGProps<SVGPathElement> & TProps_165>;
    pattern: <TProps_166 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_166>[]) => FunctionComponent<React.SVGProps<SVGPatternElement> & TProps_166>;
    polygon: <TProps_167 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_167>[]) => FunctionComponent<React.SVGProps<SVGPolygonElement> & TProps_167>;
    polyline: <TProps_168 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_168>[]) => FunctionComponent<React.SVGProps<SVGPolylineElement> & TProps_168>;
    radialGradient: <TProps_169 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_169>[]) => FunctionComponent<React.SVGProps<SVGRadialGradientElement> & TProps_169>;
    rect: <TProps_170 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_170>[]) => FunctionComponent<React.SVGProps<SVGRectElement> & TProps_170>;
    stop: <TProps_171 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_171>[]) => FunctionComponent<React.SVGProps<SVGStopElement> & TProps_171>;
    switch: <TProps_172 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_172>[]) => FunctionComponent<React.SVGProps<SVGSwitchElement> & TProps_172>;
    text: <TProps_173 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_173>[]) => FunctionComponent<React.SVGTextElementAttributes<SVGTextElement> & TProps_173>;
    textPath: <TProps_174 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_174>[]) => FunctionComponent<React.SVGProps<SVGTextPathElement> & TProps_174>;
    tspan: <TProps_175 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_175>[]) => FunctionComponent<React.SVGProps<SVGTSpanElement> & TProps_175>;
    use: <TProps_176 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_176>[]) => FunctionComponent<React.SVGProps<SVGUseElement> & TProps_176>;
    view: <TProps_177 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_177>[]) => FunctionComponent<React.SVGProps<SVGViewElement> & TProps_177>;
};

/**
 * Allows to use atomic CSS classes in a styled or css block
 *
 * @usage
 *
 * ```tsx
 * import { styled, atoms } from "next-yak";
 *
 * const Button = styled.button<{ $primary?: boolean }>`
 *  ${atoms("text-teal-600", "text-base", "rounded-md")}
 *  ${props => props.$primary && atoms("shadow-md")}
 * `;
 * ```
 */
declare const atoms: (...atoms: string[]) => () => {
    className: string;
};

/**
 * Allows to use CSS keyframe animations in a styled or css block
 *
 * @usage
 *
 * ```tsx
 * import { styled, keyframes } from "next-yak";
 *
 * const rotate = keyframes`
 *  from {
 *   transform: rotate(0deg);
 *  }
 *  to {
 *   transform: rotate(360deg);
 *  }
 * `;
 *
 * const Spinner = styled.div`
 *   animation: ${rotate} 1s linear infinite;
 * `;
 * ```
 */
declare const keyframes: (styles: TemplateStringsArray, ...dynamic: never[]) => string;

export { atoms, css, keyframes, styled };
