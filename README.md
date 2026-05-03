# Starter HTML Template

Starter template for a static HTML website/page.

## Building a Docker Image

1. An initial [Dockerfile](./docs/examples/Dockerfile) is available in the repository. Create a copy of the file in the root directory. It will serve all the files under the [public](./public/) folder using Nginx.
2. Open a terminal and enter the command below to build the docker image.

   ```sh
   docker build -t my-website .
   ```

3. Run the command below to create a container and open a port on `8080`

   ```sh
   docker run -d -p 8080:80 my-website
   ```

4. Open a browser and go to http://localhost:8080 to test if it's working.

## Setup Automatic Deployments via Firebase Hosting

1. Setup a [Firebase Project](https://console.firebase.google.com) or use an existing project.
2. Setup hosting or you can choose to Add another site in an existing project.
3. Take note of the Project ID and Hosting Site ID.
4. Create a Service Account in GCP. You can follow the instructions [here](https://github.com/FirebaseExtended/action-hosting-deploy/blob/main/docs/service-account.md).
5. In your GitHub **repository settings** > **Secrets and variables** > **Actions**, add the following secrets:
   - `FIREBASE_PROJECT_ID` - Project ID from step 2.
   - `FIREBASE_SITE_ID` - Hosting Site ID from step 2.
   - `FIREBASE_SERVICE_ACCOUNT` - Key generated from step 4.
6. Create a copy of [firebase.json](./docs/examples/firebase.json) in the root directory. Change the `firebase-site-id` to the Hosting Site ID from step 2.
7. Create the following in [.github/workflows](./.github/workflows/) folder:
   - [firebase-hosting-merge.yml](./docs/examples/firebase-hosting-merge.yml) - deploys on merge/push.
   - [firebase-hosting-pull-request.yml](./docs/examples/firebase-hosting-pull-request.yml) - deploys a preview upon pull request creation.
8. Changes will be now be automatically deployed as configured.

## Links

- https://github.com/FirebaseExtended/action-hosting-deploy
