export type PacketName = keyof typeof CmdId;
export enum CmdId {
    KeepAliveNotify = 1,
    GetPlayerTokenReq = 4,
    GetPlayerTokenRsp = 5,
    PlayerLoginReq = 6,
    PlayerLoginRsp = 7,
    GetMainDataReq = 10,
    GetMainDataRsp = 11,
    GetAvatarDataReq = 24,
    GetAvatarDataRsp = 25,
    GetEquipmentDataReq = 26,
    GetEquipmentDataRsp = 27,
    GetStageDataReq = 41,
    GetStageDataRsp = 42,
    StageBeginReq = 43,
    StageBeginRsp = 44,
    StageEndReq = 45,
    StageEndRsp = 46,
    GetAvatarTeamDataReq = 47,
    GetAvatarTeamDataRsp = 48,
    GetConfigReq = 110,
    GetConfigRsp = 111,
    GetMissionDataReq = 112,
    GetMissionDataRsp = 113,
    UpdateMissionProgressReq = 117,
    UpdateMissionProgressRsp = 118,
    FinishGuideReportReq = 129,
    FinishGuideReportRsp = 130,
    StageInnerDataReportReq = 131,
    StageInnerDataReportRsp = 132,
    GetBulletinReq = 137,
    GetBulletinRsp = 138,
    AddGoodfeelReq = 154,
    AddGoodfeelRsp = 155,
    GetExtraStoryDataReq = 231,
    GetExtraStoryDataRsp = 232,
    GetMpDataReq = 340,
    GetMpDataRsp = 341,
    GetGobackReq = 364,
    GetGobackRsp = 365,
    ReportClientDataVersionReq = 398,
    ReportClientDataVersionRsp = 399,
    GetClearStageActivityReq = 453,
    GetClearStageActivityRsp = 454,
    GetPlayerCardReq = 480,
    GetPlayerCardRsp = 481,
    GetTrialAvatarReq = 585,
    GetTrialAvatarRsp = 586,
    GetFrameDataReq = 590,
    GetFrameDataRsp = 591,
    SyncTimeReq = 803,
    SyncTimeRsp = 804,
    GetWorldMapDataReq = 1012,
    GetWorldMapDataRsp = 1013,
    GetClientSettingReq = 1270,
    GetClientSettingRsp = 1272,
    GetCustomHeadDataReq = 1523,
    GetCustomHeadDataRsp = 1524,
    GetClientDataReq = 1586,
    GetClientDataRsp = 1587,
    SetClientDataReq = 1588,
    SetClientDataRsp = 1589,
    GetWebActivityInfoReq = 1601,
    GetWebActivityInfoRsp = 1602,
    GetChapterCompensationInfoReq = 1672,
    GetChapterCompensationInfoRsp = 1673,
    GetRpgTaleReq = 2300,
    GetRpgTaleRsp = 2301,
    GetLoginActivityReq = 4192,
    GetLoginActivityRsp = 4193,
    GetRankScheduleDataReq = 4233,
    GetRankScheduleDataRsp = 4234,
    GetBulletinActivityMissionReq = 4321,
    GetBulletinActivityMissionRsp = 4322,
    ClientReportReq = 5008,
    ClientReportRsp = 5009,
    GetAuthkeyReq = 5010,
    GetAuthkeyRsp = 5011,
}