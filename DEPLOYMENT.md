# GitHub Pages Deployment Guide

## Quick Start

1. **Create a GitHub repository** for your project
2. **Push your code** to the main branch
3. **Enable GitHub Pages** in repository settings
4. **Configure deployment source** to "GitHub Actions"

## Step-by-Step Instructions

### 1. Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Digital ID Card project"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/jingfdev/DigitalIDCard.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the configuration

### 3. Automatic Deployment

The `.github/workflows/deploy.yml` file is already configured to:
- Build the project when you push to main branch
- Deploy the built files to GitHub Pages
- Handle asset copying automatically

### 4. Access Your Site

After deployment completes:
- Your site will be available at: `https://jingfdev.github.io/DigitalIDCard` 
- Check the **Actions** tab to monitor deployment progress

## Important Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow for deployment
- `attached_assets/profile.jpg` - Your profile image
- `client/src/pages/home.tsx` - Main ID card component
- `dist/public/` - Built files (created during deployment)

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check the Actions tab for error details
   - Ensure all dependencies are properly installed
   - Verify the build works locally with `npm run build`

2. **Site Not Loading**
   - Wait a few minutes after deployment
   - Check GitHub Pages settings are correct
   - Ensure the repository is public or you have GitHub Pro

3. **Images Not Showing**
   - Verify images are in the `attached_assets` folder
   - Check the deployment workflow copied assets correctly
   - Ensure image paths are correct in the code

### Manual Verification

Test the build locally:
```bash
npm install
npm run build
```

If the build succeeds locally, the GitHub Actions deployment should work.

## Updating Your Site

Every time you push changes to the main branch:
1. GitHub Actions will automatically rebuild the site
2. The updated site will be deployed to GitHub Pages
3. Changes will be live within a few minutes

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to your repository root
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Support

- Check the Actions tab for deployment logs
- Verify all file paths are correct
- Ensure the repository is public or you have the appropriate GitHub plan