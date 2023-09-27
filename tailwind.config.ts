import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "first-color":"#323142",
        "second" : "#ACADB9",
        "third":"#3E3E3E",
        "fourth":"#6C5FBC",
        "fifth":"#606060",
        "six":"#F9F9F9",
        "seven":"#F7F8FA",
        "eight": "#C5BFED",
        "nine":"#676767",
        "ten":"#18181B",
        "eleven": " #1A202C",
        "twenty": " #A0AEC0",
        "thirty":"#F1534E",
        "fourty":"#201F1F",
        "fifty":"#DAA31A",
        "sixty":" #8E97A6",

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "bg-image":"url('/assets/bg-image.png')",
          "bg-histo":"url('/assets/bg-history.png')"
      },
      backgroundColor:{
        "bg-color":"#6C5FBC",
        "bg-color-input":"#F5F5F5",
        "bg-button":"#6C5FBC",
        "bg-span":"#8E97A6",
        "bg-body":"#F9F9F9",
        "bg-footer":"#EAEAEA",
        "bg-span-top":"#ACADB9",
        "bg-history":"#F7EDD0"
      },
      maxWidth:{
        "mxs":"344px",
        "mx-customer-text":"365px",
        "mx-king":"162px",
        "text-max":"500px",
        "text-king":"710px",
        "wrapper":"700px",
        "divinput":"531px",
        "inputs":"385px",
        "customer-max":"528px",
        "customer-text":"390px",
        "line-w" : "667px",
        "acardion-w":"1152px",
        "card-w":"225px",
        "img-w":"185px",
        "containers":"1259px",
        "max-buttons":"76px",
        "max-header":"1248px",
        "max-header-logo":"112px",
        "max-header-comp":"378px",
        "max-link":"147px",
        "max-heaeder-button":"278px",
        "max-menu0link":"250px",
        "max-data-p":"123px",
        "w-page":"1214px",
        "content-max":"1075px",
        "max-cart":"681px",
        "max-healty":"942px",
        "max-healthy-c":"206px",
        "max-premium":"432px",
        "max-dashboard":"320px",
        "max-com":"1600px",
        "max-com2":"1297px",
        "max-footer":"1458px",
        "max-premiumm":"1120px",
        "max-premium-text":"548px",
        "max-helathy-w":"1440px",
        "max-footer-res":"611px",
        "max-dash-res":"487px",
        
      },
      height:{
        "img-h":"185px"
      },
      width:{
        "customer-text":"365px",
      },
      boxShadow:{
        "shadows":"0px 4px 9px 1px #ACADB9",
      },
      fontSize:{
        "text-enjoy":"75px",
        "text-king":"10px",
        "text-dash":"50px",
        "title-dash":"28px",

      },
      lineHeight:{
        "height-enjoy":"90px"
      },
      borderColor:{
        "color-b":"#ACADB9",
      },
      spacing:{
        "left-r":"40%",
        "top-r":"-30px"
      }
    },
  },
  plugins: [],
}
export default config
