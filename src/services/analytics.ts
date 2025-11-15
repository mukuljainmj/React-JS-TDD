// create analytics service to track counter events
class AnalyticsService {
  logEvent(eventName: string, data: Record<string, any>) {
    console.log(`Event: ${eventName}`, data);
    // Here you could integrate with an actual analytics backend
  }
}

const analyticsService = new AnalyticsService();
export default analyticsService;
