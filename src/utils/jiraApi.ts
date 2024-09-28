export const jiraAuthUrl = () => {
  const audience = "api.atlassian.com";
  const clientId = process.env.JIRA_CLIENT_ID || "";
  const prompt = "consent";
  const redirectUri = process.env.JIRA_REDIRECT_URI || "";
  const responseType = "code";
  const scopes = "read:jira-work write:jira-work";

  const queryParams = new URLSearchParams({
    audience: audience,
    clientId: clientId,
    prompt: prompt,
    redirectUri: redirectUri,
    responseType: responseType,
    scopes: scopes,
  });

  return `https://auth.atlassian.com/authorize?${queryParams.toString()}`;
};
