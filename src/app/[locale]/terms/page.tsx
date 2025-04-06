import TermsComponent from "@/components/Terms/TermsComponent"

export async function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'de' }];
  }

export default async function Terms({params}: {params: Promise<{locale:string}>}){
    const awaitedParams = await params;
    const locale = awaitedParams.locale;
    console.log(locale);
    
    return (
        <TermsComponent />
    )
}