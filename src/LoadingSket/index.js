import React from "react"
import ContentLoader from "react-content-loader"


const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={550}
    height={200}
    viewBox="0 0 400 150"
    backgroundColor="#808080"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="10" cy="20" r="8" /> 
    <rect x="22" y="15" rx="5" ry="5" width="288" height="13" /> 
    <circle cx="580" cy="228" r="8" /> 
    <rect x="525" y="219" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="578" cy="219" r="8" /> 
    <rect x="419" y="222" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="587" cy="226" r="8" /> 
    <rect x="478" y="217" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)

export { MyLoader}




