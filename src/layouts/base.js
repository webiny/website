import React from "react";
import Helmet from "react-helmet";
import Head from "./components/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CookieNotice from "../components/ui/cookie-notice";
import { ModalProvider } from "../components/ui/layout/video-modal";
import "./index.css";
import "./reset.css";
class BaseLayout extends React.Component {
    render() {
        return (
            <>
                <Head
                    title={this.props.title + " | Webiny"}
                    description={this.props.description}
                    image={this.props.image}
                />

                <Helmet>
                    <style>
                        {`
            .async-hide { opacity: 0 !important}
            `}
                    </style>
                </Helmet>
                <Helmet>
                    <script type="text/javascript">
                        {`
            (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
            h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
            })(window,document.documentElement,'async-hide','dataLayer',1000,
            {'GTM-NJG8KQL':true});
          `}
                    </script>
                </Helmet>
                <Helmet>
                    <script type="text/javascript">
                        {`
                        window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
                        `}
                    </script>
                </Helmet>
                <ModalProvider>
                    <Header />
                    {this.props.children}
                    <Footer />
                    <CookieNotice />
                </ModalProvider>
            </>
        );
    }
}

export default BaseLayout;
