import React from "react";
import Home from "./component/Home";
import Hero from "./component/Hero";
import { Routes, Route } from "react-router-dom";
import Bulk_sms from "./pages/Bulk_sms";
import Navbar from "./component/navbar/Navbar";
import Voice from "./pages/Voice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Term_Coditions from "./pages/Term_Coditions";
import IVR from "./pages/IVR";
import Development from "./pages/Development";
import Digital from "./pages/Digital";
import Contact_us from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import MobileBlog from "./pages/MobileBlog";
import PromotionalBlog from "./pages/PromotionalBlog";
import BulkvoiceBlog from "./pages/BulkvoiceBlog";
import BlogPromotional from "./pages/Blog";
import Newfile from "./pages/Newfile";
import OwnVoiceCall from "./pages/OwnVoiceCall";
import TollIVR from "./pages/TollIVR";
import TollFreeIVR from "./pages/TollFreeIVR";
import AndroidDevelopment from "./pages/AndroidDevelopment";
import ContextWritting from "./pages/ContextWritting";
import GoogleMyBussiness from "./pages/GoogleMyBussiness";
import PPCService from "./pages/PPCService";
import SEO from "./pages/SEO";
import SMO from "./pages/SMO";
import MainBulkBlog from "./pages/MainBulkBlog";
import Transactional from "./pages/Transactional";
import FrontpageBulk_SMS from "./pages/FrontpageBulk_SMS";
import FristPageBlog from "./pages/FristPageBlog";
import WhatsApp from "./pages/WhatsApp";
import CreateBlog from "./component/CreateBlog";
import LeadsList from "./component/LeadsList";
import UpdateBlog from "./component/UpdateBlog";
import AllBlog from "./component/AllBlog";
import Login from "./pages/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import RefundPolicy from "./pages/RefundPolicy";



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bulk_sms" element={<Bulk_sms />} />
        <Route path="/Voice" element={<Voice />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Term&Coditions" element={<Term_Coditions />} />
        <Route path="/RefundPolicy" element={<RefundPolicy/>}/>
        <Route path="/IVR" element={<IVR />} />
        <Route path="/Development" element={<Development />} />
        <Route path="Digital" element={<Digital />} />
        <Route path="/Contact" element={<Contact_us />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="/MobileBlog" element={<MobileBlog />} />
        <Route path="/PromotionalBlog" element={<PromotionalBlog />} />
        <Route path="/BulkvoiceBlog" element={<BulkvoiceBlog />} />
        <Route path="/BlogPromotional" element={<BlogPromotional />} />
        <Route path="/OwnVoiceCall" element={<OwnVoiceCall />} />
        <Route path="/Newfile" element={<Newfile />} />
        <Route path="/TollIVR" element={<TollIVR />} />
        <Route path="/TollFreeIVR" element={<TollFreeIVR />} />
        <Route path="/AndroidDevelopment" element={<AndroidDevelopment />} />
        <Route path="/ContextWritting" element={<ContextWritting />} />
        <Route path="GoogleMyBussiness" element={<GoogleMyBussiness />} />
        <Route path="/PPCService" element={<PPCService />} />
        <Route path="/SEO" element={<SEO />} />
        <Route path="/SMO" element={<SMO />} />
        <Route path="/MainBulkBlog" element={<MainBulkBlog />} />
        <Route path="/Transactional" element={<Transactional />} />
        <Route path="/FrontpageBulk_SMS" element={<FrontpageBulk_SMS />} />
        <Route path="/FristPageBlog" element={<FristPageBlog />} />
        <Route path="/WhatsApp" element={<WhatsApp />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/leads" element={<ProtectedRoute element={<LeadsList />} />} />
        <Route path="/adminLogin" element={<Login />} />
        <Route path="/allBlog" element={<AllBlog />} />
        <Route path="/update-blog/:id" element={<UpdateBlog />} />
      </Routes>
    </div>
  );
};

export default App;
