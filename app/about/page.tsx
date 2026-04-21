"use client";

import { useEffect, useState } from "react";

export default function Readme() {
    const [html, setHtml] = useState<string>("Loading README...");

    useEffect(() => {
        fetch("https://api.github.com/repos/pontusOlssonGit/glenns-webshop/readme", {
            headers: {
                Accept: "application/vnd.github.v3.html",
            },
        })
            .then((res) => res.text())
            .then((data) => setHtml(data))
            .catch(() => setHtml("Failed to load README."));
    }, []);

    return (
        <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}