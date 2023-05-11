import { GetStageChapterRsp, GetStageChapterRsp_CmdId, GetStageChapterRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
	const rsp = Packet.encode(GetStageChapterRsp, {
        retcode: GetStageChapterRsp_Retcode.SUCC,
        chapterList: [
            {
                chapterId: 1,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 2,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 3,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 4,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 5,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 6,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 7,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 8,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 9,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 10,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 11,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 12,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 13,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 14,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 15,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 16,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 17,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 18,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 19,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 20,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 21,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [
                    {
                        bossStageId: 1213415,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 1213416,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 1213417,
                        leftHp: 100,
                    },
                ],
                exclusiveStageList: [],
            },
            {
                chapterId: 22,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 23,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 24,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 25,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 26,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [
                    {
                        bossStageId: 32601,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 32602,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 32603,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 32604,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 32605,
                        leftHp: 100,
                    },
                    {
                        bossStageId: 32606,
                        leftHp: 100,
                    },
                ],
                exclusiveStageList: [],
            },
            {
                chapterId: 27,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 28,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 29,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 30,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 31,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 32,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 33,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 34,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
            {
                chapterId: 36,
                hasTakeChallenge: 0,
                enterPlayerLevel: 0,
                bossList: [],
                exclusiveStageList: [],
            },
        ],
    }, GetStageChapterRsp_CmdId.CMD_ID);
    
	session.send(rsp);
};
