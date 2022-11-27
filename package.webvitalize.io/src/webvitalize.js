import {
    onCLS,
    onFCP,
    onFID,
    onLCP,
    onTTFB
} from 'web-vitals';

window.WebVitalize = window.WebVitalize || {};

const API_ENDPOINT = window.WebVitalize['endpoint'] || "https://ingest.webvitalize.io/api/log";
const PAGE_TYPE = window.WebVitalize['pageType'] || null;

const sendToAnalytics = function(metric) {
    var fullUrl = window.location.href;
    var obj = {
        href: fullUrl
    };
    obj[metric.name] = metric.value;
    if (
        typeof PAGE_TYPE === 'string' &&
        PAGE_TYPE.length
    ) {
        obj['pageType'] = PAGE_TYPE;
    }
    var body = JSON.stringify(obj);
    var headers = {
        "Content-Type": "application/json",
    };

    (navigator.sendBeacon && navigator.sendBeacon(API_ENDPOINT, body)) ||
    fetch(
        API_ENDPOINT, {
            body: body,
            headers: headers,
            method: "POST",
            keepalive: true,
        }
    );
}

onCLS(sendToAnalytics);
onFCP(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);