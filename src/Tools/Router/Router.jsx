import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout';
import ErrorPage from '../../pages/ErrorPage';
import HomePageLayout from '../../Layouts/HomePageLayout';
import ServicesLayout from '../../Layouts/ServicesLayout';
import ServicesPage from '../../pages/ServicesPage';
import TextAnalysisLayout from '../../Layouts/TextAnalysisLayout';
import TextAnalysis from '../../pages/TextAnalysis';
import SentimentLayout from '../../Layouts/SentimentLayout';
import SentimentPage from '../../pages/SentimentPage';
import BotsLayout from '../../Layouts/BotsLayout';
import BotsPage from '../../pages/BotsPage';

export const router = [

    {
        name: "Anasayfa",
        link: "/",
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        breadcrumb: "Anasayfa",
        children: [
            {
                index: true,
                element: <HomePageLayout />,
            },
            {
                name: "Hizmetler",
                link: "/services",
                path: "/services",
                element: <ServicesLayout />,
                breadcrumb: "Hizmetler",
                children: [
                    {
                        index: true,
                        element: <ServicesPage />
                    },
                    {
                        name: "Text Analizi",
                        link: "/services/text-analysis",
                        path: "text-analysis",
                        element: <TextAnalysisLayout />,
                        breadcrumb: "Text Analysis",
                        children: [
                            {
                                index: true,
                                element: <TextAnalysis />
                            },
                            {
                                name: "Sentiment Analiz",
                                link: "/services/text-analysis/sentiment",
                                path: "sentiment",
                                element: <SentimentLayout />,
                                breadcrumb: "Sentiment",
                                children: [
                                    {
                                        index: true,
                                        element: <SentimentPage />
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        name: "Bot Analizi",
                        link: "/services/bots",
                        path: "bots",
                        element: <BotsLayout />,
                        breadcrumb: "Bots",
                        children: [
                            {
                                index: true,
                                element: <BotsPage />
                            }
                        ]
                    }
                ]
            }
        ]
    }

]

export default createBrowserRouter(router);