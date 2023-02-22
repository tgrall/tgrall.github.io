"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[31907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"GitHub Self-Hosted Runner Autoscaling with Kubernetes",tags:["github","actions","automation","kubernetes","cicd","devops"]},i=void 0,l={permalink:"/blog/2022/10/16/github-self-hosted-runner-autoscaling-with-kubernetes",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2022-10-16-github-self-hosted-runner-autoscaling-with-kubernetes.md",source:"@site/blog/2022-10-16-github-self-hosted-runner-autoscaling-with-kubernetes.md",title:"GitHub Self-Hosted Runner Autoscaling with Kubernetes",description:"GitHub Self-Hosted Runner Autoscaling with Kubernetes",date:"2022-10-16T00:00:00.000Z",formattedDate:"October 16, 2022",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"actions",permalink:"/blog/tags/actions"},{label:"automation",permalink:"/blog/tags/automation"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"cicd",permalink:"/blog/tags/cicd"},{label:"devops",permalink:"/blog/tags/devops"}],readingTime:6.87,hasTruncateMarker:!0,authors:[],frontMatter:{title:"GitHub Self-Hosted Runner Autoscaling with Kubernetes",tags:["github","actions","automation","kubernetes","cicd","devops"]},prevItem:{title:"GitHub Copilot: How I use it, and Why I love it",permalink:"/blog/2023/02/21/copilot-how-i-use-it-why-i-love-it"},nextItem:{title:"Getting Started with GitHub Releases",permalink:"/blog/2022/02/08/getting-started-with-github-releases"}},s={authorsImageUrls:[]},u=[{value:"Prerequisites",id:"prerequisites",level:5},{value:"GitHub Enterprise Server Authentication",id:"github-enterprise-server-authentication",level:3},{value:"Create a GitHub App",id:"create-a-github-app",level:3},{value:"Install the newly created GitHub App",id:"install-the-newly-created-github-app",level:4},{value:"Deploy GitHub Actions Runner Controller",id:"deploy-github-actions-runner-controller",level:3},{value:"1. Install the Cert Manager using Helm",id:"1-install-the-cert-manager-using-helm",level:3},{value:"2. Install the Actions Runner Controller using Helm",id:"2-install-the-actions-runner-controller-using-helm",level:3},{value:"3. Configure the GitHub App Authentication",id:"3-configure-the-github-app-authentication",level:3},{value:"4. Deploy and Test your first Runner",id:"4-deploy-and-test-your-first-runner",level:3},{value:"5- About the Runner Images",id:"5--about-the-runner-images",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"\ud83c\udfa5 Video",id:"-video",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Self-Hosted Runner Autoscaling with Kubernetes",src:n(73600).Z,width:"1158",height:"504"})),(0,a.kt)("p",null,"In this article, you will learn how to use Kubernetes to run GitHub Actions self-hosted runners on-demand. This enables you to auto-scale your runners based on the number of queued jobs, and quickly respond to spikes in workflow activity."),(0,a.kt)("p",null,"I will focus on GitHub Enterprise Server, but the same concepts apply to GitHub.com, and this post is based on the work of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions-runner-controller/actions-runner-controller"},"Actions Runner Controller")," team and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/some-natalie"},"Natalie Somersall")),(0,a.kt)("p",null,"GitHub Actions is a great way to run your CI/CD workflows. However, it can be complex to run a large number of self-hosted runners. Using Kubernetes to auto-scale your runners you can simplify the management of your runners. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/docs/detailed-docs.md"},(0,a.kt)("inlineCode",{parentName:"a"},"actions-runner-controller"))," is a Kubernetes controller that manages self-hosted."),(0,a.kt)("p",null,"You can find a video of this article on YouTube:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6Z4p-qjnKCQ"},"\ud83c\udfa5 GitHub Self-Hosted Runner Autoscaling with Kubernetes"))),(0,a.kt)("h5",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-server@latest/admin/overview/about-github-enterprise-server"},"GitHub Enterprise Server")," with an existing organization. I am using version 3.6.1, and my organization is called ",(0,a.kt)("inlineCode",{parentName:"li"},"demo")),(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster, I am using a ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine (GKE)")," cluster  ",(0,a.kt)("em",{parentName:"li"},"(v1.22.12-gke.2300 no autopilot)"),", not a preference, just that the team I am working with is using GKE. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),", I am using v3.10.1")),(0,a.kt)("p",null,"In the following section you will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create a GitHub App to authenticate the ",(0,a.kt)("inlineCode",{parentName:"li"},"actions-runner-controller")),(0,a.kt)("li",{parentName:"ul"},"deploy and configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"actions-runner-controller")),(0,a.kt)("li",{parentName:"ul"},"Test the newly created runners")),(0,a.kt)("h3",{id:"github-enterprise-server-authentication"},"GitHub Enterprise Server Authentication"),(0,a.kt)("p",null,"The Actions Runner Controller must authenticate with GitHub Enterprise Server. "),(0,a.kt)("p",null,"To authenticate the runner controller against GitHub Enterprise Server you have two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PAT (Personal Access Token)"),(0,a.kt)("li",{parentName:"ul"},"GitHub Apps")),(0,a.kt)("p",null,"Note that the runners can be registered at different levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise"},"Enterprise")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization"},"Organization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-server@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository"},"Repository"))),(0,a.kt)("p",null,"In the next steps, you will create a GitHub App to authenticate and use it at the organization level."),(0,a.kt)("h3",{id:"create-a-github-app"},"Create a GitHub App"),(0,a.kt)("p",null,"To create a GitHub App, you need to be an admin of the GitHub Enterprise Server instance. You can find more information about GitHub Apps ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-server@latest/developers/apps/about-apps"},"here"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to your Organization settings."),(0,a.kt)("p",{parentName:"li"},"For this post, you will create a GitHub App owned by an organization, in the upper-right corner of any page, click your profile photo, then click ",(0,a.kt)("strong",{parentName:"p"},"Your organizations"),". "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(4597).Z,width:"220",height:"491"})),(0,a.kt)("p",{parentName:"li"},"Then, to the right of the organization, click ",(0,a.kt)("strong",{parentName:"p"},"Settings"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(10513).Z,width:"797",height:"118"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left sidebar, click  ",(0,a.kt)("strong",{parentName:"p"}," < >Developer settings"),".  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"New GitHub App"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In "GitHub App name", type the name of your app.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(21630).Z,width:"478",height:"151"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Optionally, in "Description", type a description of your app that users will see.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In "Homepage URL", type the URL where users can learn more about your app, you can point to the Actions Runner Controller GitHub repository.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In "Wehbook", uncheck ',(0,a.kt)("strong",{parentName:"p"},"Active"),"."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then configure the permissions for your app. For this post, you will need to select the following permissions: (we will use Organization Runners)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Repository Permissions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Actions (read)"),(0,a.kt)("li",{parentName:"ul"},"Metadata (read)"))),(0,a.kt)("li",{parentName:"ul"},"Organization Permissions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Self-hosted runners (read / write)")))),(0,a.kt)("p",{parentName:"li"},"If you want to register the runners at the Repository level, you will need different permissions as documented ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/docs/detailed-docs.md#deploying-using-github-app-authentication"},"here"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Keep the default values for the other options, and click ",(0,a.kt)("strong",{parentName:"p"},"Create GitHub App"),"."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the next screen, Generate a Private key, and download it. You will need it later. (file ",(0,a.kt)("inlineCode",{parentName:"li"},"arc-private-private-key.pem")," in the following steps)")),(0,a.kt)("h4",{id:"install-the-newly-created-github-app"},"Install the newly created GitHub App"),(0,a.kt)("p",null,"In the application settings,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the ",(0,a.kt)("strong",{parentName:"p"},"Install App")," button. Click on it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the organization where you want to install the app. Then click ",(0,a.kt)("strong",{parentName:"p"},"Install"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Select "All repositories" and click ',(0,a.kt)("strong",{parentName:"p"},"Install"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(11229).Z,width:"970",height:"643"})))),(0,a.kt)("h3",{id:"deploy-github-actions-runner-controller"},"Deploy GitHub Actions Runner Controller"),(0,a.kt)("p",null,"You are not ready to deploy the Actions Runner Controller and register it to your GitHub Enterprise Server instance, for this we need:"),(0,a.kt)("h3",{id:"1-install-the-cert-manager-using-helm"},"1. Install the Cert Manager using Helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n> kubectl create namespace cert-manager\n\n> helm repo add jetstack https://charts.jetstack.io\n\n> helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.9.1 --set installCRDs=true\n\n\n")),(0,a.kt)("h3",{id:"2-install-the-actions-runner-controller-using-helm"},"2. Install the Actions Runner Controller using Helm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The GitHub Server URL ( ",(0,a.kt)("inlineCode",{parentName:"li"},"$GITHUB_SERVER_URL")," in the following steps)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n> helm repo add actions-runner-controller https://actions-runner-controller.github.io/actions-runner-controller\n\n> kubectl create namespace actions-runner-system\n\n> helm install -n actions-runner-system actions-runner-controller actions-runner-controller/actions-runner-controller --version=0.21.0\n\n> kubectl set env deploy actions-runner-controller -c manager GITHUB_ENTERPRISE_URL="$GITHUB_SERVER_URL" --namespace actions-runner-system\n\n')),(0,a.kt)("h3",{id:"3-configure-the-github-app-authentication"},"3. Configure the GitHub App Authentication"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The GitHub App data (that you can get from the GitHub App settings page):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The App ID ( ",(0,a.kt)("inlineCode",{parentName:"li"},"$GITHUB_APP_ID"),")"),(0,a.kt)("li",{parentName:"ul"},"The App Private Key file ( ",(0,a.kt)("inlineCode",{parentName:"li"},"$GITHUB_APP_PRIVATE_KEY_FILEPATH")," )"),(0,a.kt)("li",{parentName:"ul"},"The APP Installation ID ( ",(0,a.kt)("inlineCode",{parentName:"li"},"$GITHUB_APP_INSTALLATION_ID")," ). To get the Application Installation ID, go to the Application Settings Page, and click on the ",(0,a.kt)("strong",{parentName:"li"},"Install App")," button. Then click on the ",(0,a.kt)("strong",{parentName:"li"},"Configure")," button. You will find the Installation ID in the URL of the page. (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.tugdualgrall.com/organizations/{ORG}/settings/installations/{INSTALL_ID}")," )")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ kubectl create secret generic controller-manager \\\n    -n actions-runner-system \\\n    --from-literal=github_app_id=${GITHUB_APP_ID} \\\n    --from-literal=github_app_installation_id=${GITHUB_APP_INSTALLATION_ID} \\\n    --from-file=github_app_private_key=${GITHUB_APP_PRIVATE_KEY_FILEPATH}\n\n")),(0,a.kt)("h3",{id:"4-deploy-and-test-your-first-runner"},"4. Deploy and Test your first Runner"),(0,a.kt)("p",null,"You are now ready to register your runners to your organization. For this, you need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"RunnerDeployment")," resource."),(0,a.kt)("p",null,"I like to put all my runners in a separate namespace, so let's create it with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl create namespace runners\n\n")),(0,a.kt)("p",null,"Let's create a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"runner-001.yml")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\napiVersion: actions.summerwind.dev/v1alpha1\nkind: RunnerDeployment\nmetadata:\n  name: runner-001\n  namespace: runners\nspec:\n  replicas: 1\n  template:\n    spec:\n      organization: demo\n      labels:\n        - arc\n        - kubernetes\n        - gke\n      group: Default\n    \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl apply -f runner-001.yml\n\n")),(0,a.kt)("p",null,"This command will deploy a runner in the ",(0,a.kt)("inlineCode",{parentName:"p"},"runners")," namespace, and register it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," organization. ."),(0,a.kt)("p",null,"You can check the status of the runner with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get runner -n runners\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'NAME                     ENTERPRISE   ORGANIZATION   REPOSITORY   GROUP     LABELS                       STATUS    MESSAGE   AGE\nrunner-001-hp7jc-zhs66                demo                        Default   ["arc","kubernetes","gke"]   Pending             3s\n')),(0,a.kt)("p",null,"Once the runner is ready, you can check the organization settings page, and you will see the new runner:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66609).Z,width:"1275",height:"450"})),(0,a.kt)("p",null,"You can now use your runner, for this, create a new workflow file ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/test.yml")," in one of your repositories, and add the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Hello World"\non:\n    workflow_dispatch:\n\njobs:\n  build:\n    runs-on: [ arc, kubernetes]\n    steps:\n      - name: Hello world action step\n        run: echo Hello world!\n')),(0,a.kt)("p",null,"Once you have manually triggered the workflow, you will see the runner active on the organization settings page:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87922).Z,width:"788",height:"173"})),(0,a.kt)("p",null,"You can increase the number of runners by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas")," value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RunnerDeployment")," resource: ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas: 2"),", once you have updated the resource, you will see the new runner in the organization settings page."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(41515).Z,width:"1269",height:"444"})),(0,a.kt)("p",null,"These runners are ephemeral, which means that they are waiting for a Job, and once the Jon is done the Pod used by the runner is deleted and recreated."),(0,a.kt)("h3",{id:"5--about-the-runner-images"},"5- About the Runner Images"),(0,a.kt)("p",null,"The Actions Runner Controller provides three Runner container images, available on Docker Hub and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/actions-runner-controller/packages?repo_name=actions-runner-controller"},"GitHub Container Registry"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/runner/actions-runner.dockerfile"},"actions-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/runner/actions-runner-dind.dockerfile"},"actions-runner-dind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/runner/actions-runner-dind-rootless.dockerfile"},"actions-runner-dind-rootless"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"actions-runner")," image is the default image used by the controller, it is a minimal image with the runner installed. The other images are based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions-runner")," image, and add ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker in Docker")," capabilities."),(0,a.kt)("p",null,"Note: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As you may have seen the runner pods have 2 containers, the ",(0,a.kt)("inlineCode",{parentName:"p"},"runner")," container, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"dind")," container. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dind")," container to use docker."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n runners -o jsonpath=\"{.items[*].spec.containers[*].image}\" |\\\n  tr -s '[[:space:]]' '\\n' |\\\n  sort |\\\n  uniq -c\n")),(0,a.kt)("p",{parentName:"blockquote"},"Results:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   2 docker:dind\n   2 summerwind/actions-runner:latest\n"))),(0,a.kt)("p",null,'When using Docker in Docker "DinD, you need privileged access to the host; so if you are running in an environment where it is not possible, you can run a separate VM to have a custom runner dedicated to Docket tasks and actions. You can also test the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions-runner-controller/actions-runner-controller/pkgs/container/actions-runner-controller%2Factions-runner-dind-rootless"},(0,a.kt)("inlineCode",{parentName:"a"},"actions-runner-dind-rootless")," image"),", see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/docs/detailed-docs.md#runner-with-rootless-dind"},"documentation")," - I have not tested this image yet."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this blog post, we have seen how to deploy a self-hosted runner on Kubernetes, and how to use it to run GitHub Actions workflows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"install the Actions Runner Controller"),(0,a.kt)("li",{parentName:"ul"},"configure the GitHub App Authentication"),(0,a.kt)("li",{parentName:"ul"},"deploy and test your first runner")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actions-runner-controller/actions-runner-controller/blob/master/docs/detailed-docs.md"},"Actions Runner Controller documentation")," contains additional information about the various resources and options available."),(0,a.kt)("h3",{id:"-video"},"\ud83c\udfa5 Video"),(0,a.kt)("p",null,"See the Actions Runner Controller in action in this video:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/y4BKdLjKEvs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0},4597:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gh-apps-001-99b511d3acce8c4ac003c132f1bbdfe7.png"},10513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gh-apps-002-fd4e80bbfae991c656e82981fb08eb6c.png"},21630:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gh-apps-003-f2d3075759a50f9ebbf59ff405363f70.png"},11229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gh-apps-004-65fd8916d3637236f5c61d07bb7a634b.png"},66609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/org-001-bb4b3caca9a7a450e04cbee3f8819716.png"},41515:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/org-002-d83203b1f7ab506b015050fa1fa14d1d.png"},87922:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/org-003-19c7e4d9c83a7732dd23fb06644e0ef7.png"},73600:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-a2e6b355dc4209ea1b10a871f2144671.png"}}]);