import { BrowserRouter, Routes, Route, Link } from "react-router";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import DiscussionPage from "./pages/DiscussionPage";
import ParticipantPage from "./pages/ParticipantPage";
import ErrorPage from "./pages/ErrorPage";

function Router() {
    return <BrowserRouter basename='/dialogue/'>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<AuthorizationPage />} />
                <Route path="discussion/:slug" element={<DiscussionPage />} />
                <Route path="participant/:id" element={<ParticipantPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    </BrowserRouter>;
}

export default Router;