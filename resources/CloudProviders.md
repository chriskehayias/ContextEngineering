# Cloud Providers & Services

A curated list of cloud-based tools and services that accelerate Context Engineering builds. These providers offer managed infrastructure, APIs, and components so you can focus on building — not configuring servers.

---

## <img src="images/vercel.svg" width="24" alt="Vercel"> Vercel

The go-to deployment platform for frontend frameworks and serverless functions. Push your code and Vercel handles builds, CDN distribution, edge functions, and preview deployments automatically. First-class support for Next.js, but works with any framework.

**Free Plan:** Hobby tier is free — includes unlimited deployments, 100 GB bandwidth/month, and serverless functions.

**Link:** [https://vercel.com](https://vercel.com)

---

## <img src="images/neon.svg" width="24" alt="Neon"> Neon

Serverless Postgres with instant branching. Neon separates storage and compute so your database scales to zero when idle and spins up on demand. Database branching lets you create instant copies for dev/test without duplicating data.

**Free Plan:** Free tier includes 0.5 GB storage, 24/7 availability on a shared compute instance, and database branching.

**Link:** [https://neon.tech](https://neon.tech)

---

## <img src="images/auth0.svg" width="24" alt="Auth0"> Auth0

A flexible identity platform that handles authentication and authorization so you don't have to build login flows from scratch. Supports social login, passwordless, MFA, and enterprise SSO out of the box. SDKs for every major framework.

**Free Plan:** Free tier supports up to 25,000 monthly active users with unlimited social connections.

**Link:** [https://auth0.com](https://auth0.com)

---

## <img src="images/upstash.svg" width="24" alt="Upstash"> Upstash Redis

Serverless Redis with per-request pricing. No servers to manage — just a REST API or standard Redis client. Perfect for caching, session storage, rate limiting, and feature flags in serverless and edge environments.

**Free Plan:** Free tier includes 10,000 commands/day and 256 MB storage.

**Link:** [https://upstash.com/redis](https://upstash.com/redis)

---

## <img src="images/upstash.svg" width="24" alt="Upstash"> Upstash QStash

A serverless message queue and task scheduler built for HTTP. Send messages to any publicly accessible endpoint with guaranteed delivery, retries, and scheduling — no infrastructure to run. Great for background jobs, webhooks, and event-driven workflows.

**Free Plan:** Free tier includes 500 messages/day with built-in retries and scheduling.

**Link:** [https://upstash.com/qstash](https://upstash.com/qstash)

---

## <img src="images/resend.svg" width="24" alt="Resend"> Resend

A modern email API built for developers. Send transactional emails with a clean REST API, React Email templates, and real-time delivery tracking. Designed to replace clunky legacy email services with a developer-first experience.

**Free Plan:** Free tier includes 3,000 emails/month and 100 emails/day.

**Link:** [https://resend.com](https://resend.com)

---

## <img src="images/sendgrid.svg" width="24" alt="SendGrid"> SendGrid

A reliable email delivery platform for transactional and marketing emails at scale. Offers SMTP relay, a Web API, dynamic templates, and detailed analytics. Battle-tested infrastructure trusted for high-volume sending.

**Free Plan:** Free tier includes 100 emails/day forever.

**Link:** [https://sendgrid.com](https://sendgrid.com)

---

## <img src="images/twilio.svg" width="24" alt="Twilio"> Twilio

The communications API platform. Add SMS, voice calls, video, WhatsApp, and more to your apps with just a few lines of code. Twilio handles the telecom complexity so you can focus on the user experience.

**Free Trial:** Free trial includes credit to test SMS, voice, and other APIs. Pay-as-you-go pricing after that.

**Link:** [https://www.twilio.com](https://www.twilio.com)

---

## <img src="images/amazons3.svg" width="24" alt="AWS S3"> AWS S3

The industry standard for object storage. Store and retrieve any amount of data — files, images, backups, static assets — with virtually unlimited scalability. Integrates with the entire AWS ecosystem and supports fine-grained access control.

**Free Tier:** 5 GB standard storage, 20,000 GET requests, and 2,000 PUT requests per month for 12 months.

**Link:** [https://aws.amazon.com/s3](https://aws.amazon.com/s3)

---

## <img src="images/azure.svg" width="24" alt="Azure Blob"> Azure Blob Storage

Microsoft's object storage solution for the cloud. Optimized for storing massive amounts of unstructured data — documents, media, logs, and backups. Tight integration with the Azure ecosystem, .NET, and Microsoft 365.

**Free Tier:** 5 GB locally redundant storage, 20,000 read and 10,000 write operations per month for 12 months.

**Link:** [https://azure.microsoft.com/en-us/products/storage/blobs](https://azure.microsoft.com/en-us/products/storage/blobs)

---

## <img src="images/vercel.svg" width="24" alt="Vercel Blob"> Vercel Blob

Object storage built into the Vercel platform. Upload files directly from the browser or server with a simple SDK, and serve them over Vercel's global CDN. Tight integration with Vercel deployments makes it a natural fit when you're already shipping on Vercel.

**Free Plan:** Hobby tier includes 1 GB storage and 10 GB bandwidth/month.

**Link:** [https://vercel.com/storage/blob](https://vercel.com/storage/blob)

---

## <img src="images/cloudflare.svg" width="24" alt="Cloudflare R2"> Cloudflare R2

S3-compatible object storage with zero egress fees — you only pay for storage and operations, not for bandwidth out. Drop-in replacement for S3 in most SDKs, and pairs naturally with Cloudflare Workers for edge-served assets. **Best free tier of the storage options listed here.**

**Free Tier:** 10 GB storage, 1 million Class A operations, and 10 million Class B operations per month — free forever, no egress fees.

**Link:** [https://www.cloudflare.com/developer-platform/products/r2/](https://www.cloudflare.com/developer-platform/products/r2/)

---

## <img src="images/pusher.svg" width="24" alt="Pusher"> Pusher

A hosted realtime messaging service that makes it easy to add live features to your apps — think chat, notifications, live dashboards, and collaborative editing. Simple pub/sub model with channels and events. Client libraries for web, mobile, and backend.

**Free Plan:** Sandbox plan is free — includes 200,000 messages/day, 100 max connections, and unlimited channels.

**Link:** [https://pusher.com](https://pusher.com)

---

## <img src="images/ably.svg" width="24" alt="Ably"> Ably

An enterprise-grade realtime messaging platform with guaranteed message ordering, delivery, and presence. Goes beyond basic pub/sub with features like message history, stream resume, and global edge routing. A strong choice when reliability and scale matter for realtime features.

**Free Plan:** Free tier includes 6 million messages/month, 200 peak connections, and 200 channels.

**Link:** [https://ably.com](https://ably.com)

---

## <img src="images/supabase.svg" width="24" alt="Supabase"> Supabase

An open-source Backend-as-a-Service that bundles Postgres, authentication, file storage, realtime subscriptions, and edge functions into a single platform. It covers a lot of ground and can replace several standalone services. Worth knowing about as an all-in-one option, though the bundled approach can feel opinionated — if you prefer choosing best-of-breed tools for each concern (like Neon for database, Auth0 for auth, S3 for storage), the individual services listed above give you more flexibility and control over your stack.

**Free Plan:** Free tier includes 500 MB database, 1 GB file storage, 50,000 monthly active users, and 500,000 edge function invocations.

**Link:** [https://supabase.com](https://supabase.com)

---
