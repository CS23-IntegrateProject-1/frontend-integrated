import { ExamplePage } from "./pages/examplePage/ExamplePage"
import { ExamplePage2 } from "./pages/examplePage2/ExamplePage2"

export const ExampleFeatureRoutes = () => {
    return ([
        {path:"/example", element: <ExamplePage/>},
        {path:"/example2", element: <ExamplePage2/>}

    ])
}